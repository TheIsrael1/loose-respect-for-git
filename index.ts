const res = 2 + 2

console.log(res)

/* 
Every git repository has one or more branches. A branch is a named reference to the HEAD of a
sequence of commits.
*/

/* 
git commit --amend --no-edit
add new change to the last commit
*/

/* 
git commit -m will skip the text editor and directly commit the changes also

git commit -a  will add all the changes to the staging area and then commit the changes

dont need to add -a with -m
*/

/* 
git commit -m "Commit summary" -m "More detailed description follows here"
*/


/* 
commit messages should work with this format:

If I add this commit, I will ___ to my repository.
*/


/* 
git add -p

add changes to the staging area interactively and commit them separately braking up your changes into smaller commits
*/

/* 
git stash list
show all the stashes
*/

/* 
git stash pop
apply the changes and remove the stash
*/

/* 

git stash apply
apply the changes and keep the stash
*/

/* 
git stash show -p stash@{2}
show the changes in the stash
*/

/* 
git stash clear
remove all the stashes
*/