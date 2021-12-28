import os
import random
import subprocess
import datetime

# Set the range of months (October to December)
months = [11, 12]
# Define days of the week (0 = Monday, 6 = Sunday)
days_of_week = [0, 1, 2, 3, 4, 5, 6]

# Function to run a git commit command with a common message
def commit_with_random_date(commit_date):
    # Generate random time between 12 PM and 4 PM
    hour = random.randint(19, 23)  # Between 12 and 16 PM
    minute = random.randint(0, 59)
    second = random.randint(0, 59)

    # Create a datetime object
    commit_time = datetime.datetime(commit_date.year, commit_date.month, commit_date.day, hour, minute, second)
    commit_date_str = commit_time.strftime("%Y-%m-%dT%H:%M:%S")

    # Set the environment variables and commit with the random date
    os.environ["GIT_AUTHOR_DATE"] = commit_date_str
    os.environ["GIT_COMMITTER_DATE"] = commit_date_str

    # Commit with a common message (e.g., "Update files")
    commit_message = "Update files"

    # Execute the commit command
    subprocess.run(["git", "add", "."])  # Add all changes
    subprocess.run(["git", "commit", "--amend", "--no-edit", "--date", commit_date_str, "-m", commit_message])  # Amend commit with new date and message
    subprocess.run(["git", "push", "--force"])  # Push the commit immediately after each one
    print(f"Committed and pushed with message '{commit_message}' on {commit_date_str}")

# Main function to run the script
def generate_commits():
    for month in months:
        for day in range(1, 30):  # Iterate through all days of the month
            # Randomize the days of the week (up to 4 days max)
            random_days = random.sample(days_of_week, 4)
            for weekday in random_days:
                commit_date = datetime.date(2021, month, day)
                if commit_date.weekday() == weekday:  # Check if the weekday matches
                    num_commits = random.randint(1, 2)  # Number of commits for the day (between 1 and 4)
                    for _ in range(num_commits):
                        commit_with_random_date(commit_date)
                    print(f"Finished commits for {commit_date}.")

if __name__ == "__main__":
    generate_commits()
