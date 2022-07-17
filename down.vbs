Set objWord = CreateObject("Word.Application") 
Set colTasks = objWord.Tasks 

If colTasks.Exists("npm") Then 
    colTasks("npm").Close 
End If 
objWord.Quit