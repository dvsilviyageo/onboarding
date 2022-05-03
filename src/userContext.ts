import  React, {createContext} from 'react';


// export const UserContext = createContext('');

export const UserContext = createContext({userName: '', setUserName: (() => {} ) as React.Dispatch<React.SetStateAction<string>>}) ;

export const DragContext = createContext({dragSelectNames:  <string[]>[], setDragSelectNames: (() => <string[]>[]) as React.Dispatch<React.SetStateAction<string[]>>}) ;