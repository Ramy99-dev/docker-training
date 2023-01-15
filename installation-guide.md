<h1>Installation guide </h1>
<h2>Windows</h2>
<h3>System requirements</h3>
<ul>
<li>
Enable the WSL 2 feature on Windows. 
Open PowerShell or Windows Command Prompt in <b>administrator mode </b> by right-clicking and selecting <b>"Run as administrator"</b>, enter the wsl --install command, then restart your machine.<br/>

> wsl --install

</li>
<li>
BIOS-level hardware virtualization support must be enabled in the BIOS settings. <br/>
<img src="assets/BIOS virtualization activation .jpg">
</li>
</ul><br/>
Install docker desktop <a href="https://docs.docker.com/desktop/install/windows-install/">(Click here)</a><br/>
<img width="720px" src="assets/windows installation.gif"><br/>
Launch Docker Desktop <br/>
<img  src="assets/docker-app-search.png">
<hr>
<h2>Linux</h2>
Update existing packages 
<br/>

> sudo apt update

Next, install a few prerequisite packages which let apt use packages over HTTPS:<br/>

> sudo apt install apt-transport-https ca-certificates curl software-properties-common

Then add the GPG key for the official Docker repository to your system:<br/>

> curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

Add the Docker repository to APT sources:<br/>

> sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
> 
Finally, install Docker:

> sudo apt install docker-ce


Docker should now be installed, the daemon started, and the process enabled to start on boot. Check that it’s running:

> sudo systemctl status docker 
>
If you want to avoid typing sudo whenever you run the docker command, add your username to the docker group:

> sudo usermod -aG docker ${USER}
>
> su - ${USER}

<hr>
<h2>References:</h2>
<ul>
 <li><a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04">
 https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04</a></li>
 <li><a href="https://docs.docker.com/desktop/install/windows-install/">https://docs.docker.com/desktop/install/windows-install/</a>
 </li>
 <li><a href="https://learn.microsoft.com/fr-fr/windows/wsl/install">https://learn.microsoft.com/fr-fr/windows/wsl/install</a></li>
</ul>