import React from 'react';
import './App.css';

function Response({ action }){
    const legalactions = ['site', 'brennan'];

    const commands = {
        help: () => (
            <div>
                GNU bash, version 4.4.20(1)-release x86_64-pc-linux-gnu (not really) <br/>
                These shell commands are defined internally.  Type help to see this list. <br/>
                <br/>
                This website was designed to loosely resemble the Terminal Enviornment in Linux. <br/>
                Would you prefer to view the same information in a more user friendly way? Coming soon! <br/>
                See below for a list of commands. <br/>
                <br/>
                brennan [OPTION]<br/>
                    -a, --about-me || Print my about me section<br/>
                    -s, --skills || Print my skills section<br/>
                    -p, --projects || Print my projects section<br/>
                    -c, --contact-me || Print my contact me section<br/>
                site [OPTION]<br/>
                    -p, --pretty || Redirect to the pretty version of this site<br/>
                    -pc, --prompt-color ||  Change the prompt color<br/>
                    -bc, --back-color || Change the background color<br/>
                sshnuke<br/>
                sudo -i<br/>
            </div>
        ),
        "brennan -a": () => (
            <div>
                <b>Hello! My name is Brennan!</b><br/>
                <br/>
                I am a passionate and experienced software engineer based in Denver, Colorado.<br/>
                I thrive on all things computing, and I am eager to collaborate with companies<br/>
                working on exciting tech stacks or pushing the boundaries of innovation!<br/>
                My expertise lies in Full Stack development, real-time event-driven platforms, REST APIs, and business communication solutions.<br/>
                Overall, I bring a strong focus on building maintainable, scalable systems that support large user bases and complex workflows.<br/>
                That being said, I’m always enthusiastic about exploring new platforms and fields where my skills can add value.<br/>
                I look forward to connecting and partnering with you to build something amazing!<br/>
                <br/>
                I am always looking to connect!<br/>
                Run <b>brennan -c</b> to find my contact information.<br/>
                <br/>
                Thanks for stopping by!<br/>
            </div>
        ),
        "brennan --about-me": () => commands["brennan -a"](),
        "brennan -c": () => (
            <div>
                <b>Contact Information</b><br/>
                <br/>
                <a href="https://github.com/Six-S"><i>Personal GitHub</i></a><br/>
                <a href="https://github.com/BrennanLink"><i>Professional GitHub</i></a><br/>
                <a href="mailto:brenlink@gmail.com"><i>Email</i></a><br/>
                <a href="https://linkedin.com/in/brennan-link-084418343/"><i>LinkedIn</i></a><br/>
                <br/>
            </div>
        ),
        "brennan --contact-me": () => commands["brennan -c"](),
        "brennan -s": () => (
            <div>
                <i>Languages</i><br/>
                - <b>JavaScript (<i>Experienced</i>):</b> React, Node, TypeScript, Express, Backbone, Socket.io<br/>
                - <b>PHP (<i>Experienced</i>):</b> Restler, Guzzle, Psalm<br/>
                - <b>Python (<i>Experienced</i>):</b> Flask, BeautifulSoup, MicroPython<br/>
                - <b>Java (<i>Familiar</i>):</b> Micronaut, Spring<br/>
                - <b>Asterisk Dialplan (<i>Familiar</i>)</b><br/>
                - <b>C/C++ (<i>Familiar</i>):</b> STD, Arduino<br/>
                - <b>Assembly (<i>Familiar</i>):</b> ARM, 6502<br/>
                <br/>
                <i>Databases</i><br/>
                - SQL (MySQL, PostgreSQL)<br/>
                - MongoDB, DocumentDB<br/>
                - LDAP (389DS, OpenLDAP)<br/>
                <br/>
                <i>Tools</i><br/>
                - Git (GitHub, GitHub Actions, GitLab)<br/>
                - Docker, Docker Compose<br/>
                - Kubernetes<br/>
                - Virtualization (VMWare, VirtualBox)<br/>
                <br/>
                <i>Platforms & Infrastructure</i><br/>
                - MacOS<br/>
                - Linux (Debian, Arch, Bash, Zsh)<br/>
                - AWS – Lambda, S3, EC2, CloudFront (Familiar with IAM, RDS, SQS)<br/>
            </div>
        ),
        "brennan --skills": () => commands["brennan --skills"](),
        "site -p": () => (
            <div>
                <br/>
                <i>I'm afraid I can't do that, Dave.</i><br/>
                <br/>
                The "pretty" version of this website isn't ready for<br/>
                the prying eyes of the public just yet.<br/>
                <br/>
                Check back later, would you?<br/>
                <br/>
            </div>
        ),
        "site --pretty": () => commands["site -p"]()
    }

    const errorResponse = () => {
        const responses = {
            missingargs: () => (
                <div>
                    {action} requires 1 or more arguments!
                </div>
            ),
            sudo: () => (
                <div>
                    user is not in the sudoers file. This incident will be reported.
                </div>
            ),
            default: () => (
                <div>
                    {action.split(' ')[0]}: command not found
                </div>
            )
        }

        if(action.includes("sudo")){
            return responses.sudo();
        }

        if(legalactions.includes(action)){
            return responses.missingargs();
        }

        return responses.default();

    }

    const finalResponse = commands.hasOwnProperty(action) ? commands[action]() : errorResponse();

    return(
        <div className="response">
            {finalResponse}
        </div>
    )
}

export default Response;