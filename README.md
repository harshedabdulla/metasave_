# Introduction

A collaborative project between CUSAT and Homomorphic Software Pvt Ltd with a grant from Ethereum foundation.

## Data Flow Diagram

Below is the Data Flow Diagram (DFD) that outlines the flow of data across the system:

![Data Flow Diagram](DFD.png)

## YOLOv7-W6-Pose Model

### Base Model Performance: 
1. Resolution: 1280
2. Average Precision (AP): 54.9%
3. Recall: 25.1%
4. Train/Box Loss: 1.8%
5. Train/Class Loss: 0.0%
6. Train/Object Loss: 0.6%
7. Val/Box Loss: 2.8%
8. Val/Class Loss: 0.0%
9. Val/Object Loss: 1.5%
10. Learning rate: 0.00447
11. AP50 (50% IoU): 72.6%
12. AP75 (75% IoU): 60.1%
13. Average fps: ~10
14. Latency: ~100 ms

### Metrics:
1. Cohen's Kappa Score: 0.69
2. Accuracy: 84.5%

![ROC Curve](metrics/roc.png)
![Confusion Matrix](metrics/confusion_matrix.png)

## Installation

This project uses a monorepo structure that includes both front-end and back-end components. To get started, run the following commands:

```bash
# Install dependencies for both front-end and back-end
npm install

# Run the front-end development server
npm run dev-fe

# Run the back-end development server
npm run dev-be

# Run camera (currently on laptop)
npm dev-camera

# Run odroid
npm dev-odroid
```

# Project Setup Guide

## Prerequisites

### For Both Windows and Linux

1. **Python**: 
   - Ensure you have Python installed. You can download it from [Python's official website](https://www.python.org/downloads/).

2. **Pip**: 
   - Pip should be installed with Python, but you can ensure it's up-to-date by running the following command:
     ```bash
     python -m ensurepip --upgrade
     ```

3. **CUDA (for GPU users)**:
   - If you have an Nvidia GPU and want to use CUDA, you need:
     - A CUDA-capable GPU
     - A supported version of Linux/Windows with a gcc compiler and toolchain
     - NVIDIA CUDA Toolkit: [CUDA Downloads](https://developer.nvidia.com/cuda-downloads)
   - Check your GPU driver version with:
     ```bash
     nvidia-smi
     ```
   - Install or update your Nvidia drivers if necessary from: [Nvidia Drivers](https://www.nvidia.com/en-us/drivers/).

  3. **NODE JS**:
    - Use Node v20.16.0 throughout the project
     ```bash
    nvm install 20.16.0
    nvm use 20.16.0
    node -v
     ```

### Install PyTorch

- **CPU Only**:
  ```bash
  conda install pytorch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 cpuonly -c pytorch
  ```
- **GPU and CPU (choose from either versions which are compatible with your current GPU model)**:
  
  **CUDA 11.8**  
  ```bash
  conda install pytorch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 pytorch-cuda=11.8 -c pytorch -c nvidia
  ```
  **CUDA 12.1**  
  ```bash
  conda install pytorch==2.3.1 torchvision==0.18.1 torchaudio==2.3.1 pytorch-cuda=12.1 -c pytorch -c nvidia
  ```

### Install External Libraries

- **Install dependencies**:
    ```bash
    pip install -r packages/model/requirements.txt
    ```

    ```bash
    npm install
    ```

### Setting Up Camera Device

- **Any USB port camera with a resolution of 1080*1920 or less should work. In the working directory, navigate to:**
    ```bash
    packages/model/camera.py
    ```

- **Ensure that the following line in the script is as is:**
   ```bash
    cap = cv2.VideoCapture(0)
    ```

O is default for the system's native camera. You can set the value inside the VideoCapture function to other numbers. Other numbers represent peripherically connected cameras.

### Setting Up Wearable Device (optional)

The camera.py script is capable of execution even if the wearable device isn't connected. But if you would like to set it up, follow this procedure:

- 

## Purpose of each module:

# Frontend
A client side for both user & hospital. 
User can view their fall details/close contacts/profile/hospital/devices.

# Backend
This handles all the functionalities like authentication/fall data/whatsapp messages to close contacts/user data/communicating with blockchain & IPFS/etc.

# Camera
This is the code that's supposed to run inside the camera. It detects a fall and sends the details to the backend.

# Odroid
This regularly listens for data from the wearable device. If it detects a fall, it also sends the details to the backend.
