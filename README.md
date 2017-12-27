# angular-sample-app
angular app using visual studio and uploading to git hub

this is to demostrate the use of simple angular helloworld app
visual studio and npm and node with angular cli v1.5

to show case how to use git for this project 

from your bash
-> root of project
-> create similar rootname in the github as new repository
-> root > git init
        git status
        git add
        git push
          if any error or warning/fatal use the message the properly
        git push origin master
          in this case origin should be the remote and master should be branch or master
        if no remote set for the project add it as below
          git remote add origin https://github.com/<<username>>/<<repositoryname>>
          also you can get this git web by looking for cloning or download link
        if any issues in pushing especialy if you see message like below 
          "Updates were rejected because the tip of your current branch is behind hint: its remote counterpart. 
            Integrate the remote changes."
        try to pull the details from remote first by using 
        git pull --rebase origin master
          please check for origin and master
          if you still face issue 
          check for the issue to fix in the pull 
          do again continue/abort
        git rebase --continue
        git add --all
        git status
        git rebase --continue
        git pull origin master
        git push origin master
        git status
-> the whole steps are because of the conflicts in setting up the local repository, pushing to remote
please refer below link for the simple steps in pushing your project to github and if you face similar issue what to do
https://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/
https://readwrite.com/2013/10/02/github-for-beginners-part-2/
https://stackoverflow.com/questions/25237959/updates-were-rejected-because-the-tip-of-your-current-branch-is-behind-hint-its


         


        
