# FrontEnd Deployment 

- SignUp to aws
- launch instance by creating .pem files for keys

- for wsl UBANTU

    * IF running Ubuntu in WSL (Windows Subsystem for Linux) or in a VM
    
    Ubuntu terminal runs separately in a Linux filesystem, and by default, the Linux root user doesn’t have a "Downloads" folder unless you create it manually.
    
    So Ubuntu's /root/Downloads ≠ Windows Downloads.
    
    1. Go to the location of your .pem file
    cd /mnt/c/Users/mewbee/Downloads
    
    
    Confirm it's there:
        ls KeyPair.pem
    
    
    2. Set secure permissions
        chmod 400 KeyPair.pem
        This ensures only you can read the file, which is required by SSH.
    
        --> WSL doesn’t fully respect chmod on files inside /mnt/c/... (your Windows filesystem). Even though you did chmod 400, WSL can't enforce permissions on files stored in Windows drives like C:, which AWS SSH cares about strictly.
            --->✅ Fix: Move the .pem file into WSL's native Linux filesystem
                    ----> Create a secure folder inside WSL--->mkdir -p ~/.ssh
    
                    ---->Copy the key file from Windows to WSL:->
                        cp /mnt/c/Users/mewbee/Downloads/KeyPair.pem ~/.ssh/
    
                    ---->move to .ssh and apply permissions:->
                        cd ~/.ssh
                        chmod 400 KeyPair.pem
    
    3. SSH into your EC2 instance
       Now run the following command (replace username if needed):
        ssh -i "KeyPair.pem" ubuntu@ec2-13-233-56-165.ap-south-1.compute.amazonaws.com

- Install node version -->24.3.0

- git clone DevTinderUI

- cd DevTInderUI
- npm install
- npm run build

- INSTALL and Run NGINX
    -> sudo apt update
    -> sudo apt install nginx
    -> sudo systemctl start nginx
    -> sudo systemctl enable nginx
- copy dist folder to nginx http server  i.e. /var/www/html 
    -> sudo scp -r dist/* /var/www/html

- Enable port 80 on our instance  

- IT is live on http://ec2-13-233-56-165.ap-south-1.compute.amazonaws.com/ but wont run on 13-233-56-165