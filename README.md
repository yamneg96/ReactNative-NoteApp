# NoteApp 📝

A modern, full-stack Note Application that allows users to create, organize, and manage their personal notes securely. Built with **React Native** and **Appwrite** for a clean, intuitive user experience on mobile devices.

-----

## Features ✨

This application includes key functionalities to provide a seamless note-taking experience:

  * **User Authentication**: Secure user registration and login to ensure private notes for each user. 🔒
  * **CRUD Operations**: Users can **C**reate ✍️, **R**ead 📖, **U**pdate ✏️, and **D**elete 🗑️ notes, with real-time feedback.
  * **Offline Support**: Notes are stored locally and synced to the cloud when online, allowing for seamless use on the go.
  * **Mobile-First Design**: The app provides a fluid and responsive interface that is optimized for mobile devices. 📱

-----

## Tech Stack 🛠️

This project is powered by a modern, industry-standard technology stack:

  * **Frontend**: **React Native** ⚛️ for building a dynamic and cross-platform mobile application.
  * **Backend**: **Appwrite** 🚀 for a self-hosted backend-as-a-service solution, providing the authentication, database, and storage APIs.
  * **Styling**: **Tailwind CSS** 💨 for rapid and utility-first UI development on React Native.

-----

## Getting Started 🚀

Follow these steps to get a local copy of the project up and running on your machine.

### Prerequisites ⚙️

You will need **Node.js**, **npm**, and a **React Native development environment** installed.

### Installation ⬇️

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yamneg96/ReactNative-NoteApp.git
    cd your-repo
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up Appwrite:**
      * Create a new project in your Appwrite console.
      * Create a `.env` file in the project's root directory.
      * Add your Appwrite project ID and API endpoint to the `.env` file.

### Running the App 🏃‍♂️

1.  **Start the metro bundler:**
    ```bash
    npx react-native start
    ```
2.  **Run the app on a device or emulator:**
      * For Android:
        ```bash
        npx react-native run-android
        ```
      * For iOS:
        ```bash
        npx react-native run-ios
        ```

The application should now be running on your chosen device or emulator. 🎉