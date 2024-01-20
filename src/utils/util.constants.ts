export enum HTMLIds{
    nav = "nav",
    navReset = "navReset",
    navVisualize = "navVisualize",
    navStartNode = "navStartNode",
    navEndNode = "navEndNode",
    navWallNode = "navWallNode",
    navMoreOptions = "navMoreOpt",
    navSelect = "navSelect",

    toaster = "toaster",
    toasterBody = "liveToast",
    toasterBodyText = "toastBody",

    progress = "progress",
    progressBar = "progressBar"

    ,modal = "modal"
    ,modalMainId = "tsModal"

    ,maze = "maze"
    ,mazeEntry = "mazeEntry"
}

export enum AlgoNames{
    algorithmDFS = "Depth-First Search"
    ,algorithmBFS = "Breadth-First Search"
    ,algorithmAStar = "A-Star"
    ,algorithmDijkstra = "Dijkstra"
}

export enum NodeState{
    nodeStateEvaluated = "evaluated"
    ,nodeStateWall = "wall"
    ,nodeStateStart = "start"
    ,nodeStateEnd = "end"
    ,nodeStateEmpty = "empty"
}