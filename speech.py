import pyttsx3

# Initialize the text-to-speech engine
engine = pyttsx3.init()

# Set the speech rate (optional)
engine.setProperty("rate", 150)  # Adjust the value as desired

# Set the voice (optional)
# voices = engine.getProperty("voices")
# engine.setProperty("voice", voices[0].id)  # Select the voice by index

# Get user input
text = input("Enter the text to convert to speech: ")

# Convert text to speech
engine.say(text)
engine.runAndWait()
