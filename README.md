# angular-sample-app
angular app using visual studio and uploading to git hub

this is to demonstrate the use of simple angular hello world app
visual studio and npm and node with angular cli v1.5

to show case how to use git for this project 
1.	from your bash
2.	root of project
3.	create similar rootname in the github as new repository
4.	root > git init
•	git status
•	git add
•	git push
if any error or warning/fatal use the message the properly
•	git push origin master
a)	in this case origin should be the remote and master should be branch or master
b)	if no remote set for the project add it as below
•	git remote add origin https://github.com/<<username>>/<<repositoryname>>
a)	also you can get this git web by looking for cloning or download link
b)	if any issues in pushing especially if you see message like below 
c)	"Updates were rejected because the tip of your current branch is behind hint: its remote counterpart. Integrate the remote changes."
d)	try to pull the details from remote first by using 
•	git pull --rebase origin master
a)	please check for origin and master
b)	if you still face issue 
c)	check for the issue to fix in the pull 
d)	do again continue/abort
•	git rebase --continue
•	git add --all
•	git status
•	git rebase --continue
•	git pull origin master
•	git push origin master
•	git status
5.	 the whole steps are because of the conflicts in setting up the local repository, pushing to remote

references:
https://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/
https://readwrite.com/2013/10/02/github-for-beginners-part-2/
https://stackoverflow.com/questions/25237959/updates-were-rejected-because-the-tip-of-your-current-branch-is-behind-hint-its
