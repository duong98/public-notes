## Install NSSM with Chocolatey
`choco install -y nssm`


## Installing services
`nssm install Telegraf c:\telegraf\telegraf.exe -config c:\telegraf\telegraf.config`

`nssm install Consul c:\consul.io\consul.exe agent -config-dir c:\consul.io\consul.d\someconfig --ui-dir c:\consul.io\ui`

## App setup
```
nssm install Ombi "C:\Ombi\Ombi.exe"
nssm set Ombi AppDirectory "C:\Ombi"
nssm set Ombi Start SERVICE_AUTO_START
```

---

# cheatsheat
- [Create a new service](#create-a-new-service)
- [List parameters for a service](#list-parameters-for-a-service)
- [Set a parameter for a service](#set-a-parameter-for-a-service)
- [Parameter list](#parameter-list)

## Create a new service
```dos
nssm.exe install SERVICE_NAME "C:\path\to\exe\or\bat\file.ext" "argument1 argument2"
```

## List parameters for a service
```dos
nssm.exe get SERVICE_NAME *
```

## Set a parameter for a service
```dos
nssm.exe set SERVICE_NAME PARAMETER_NAME PARAMETER_VALUE
nssm.exe set SERVICE_NAME Description "My service description."
nssm.exe set SERVICE_NAME Start SERVICE_AUTO_START
nssm.exe set SERVICE_NAME AppExit Default Exit
nssm.exe set SERVICE_NAME AppStdout "C:\log\service-output.log"
```

## Parameter list
```
AppAffinity
AppDirectory
AppEnvironment
AppEnvironmentExtra
AppExit
Application
AppNoConsole
AppParameters
AppPriority
AppRestartDelay
AppRotateBytes
AppRotateBytesHigh
AppRotateFiles
AppRotateOnline
AppRotateSeconds
AppStderr
AppStderrCreationDisposition
AppStderrFlagsAndAttributes
AppStderrShareMode
AppStdin
AppStdinCreationDisposition
AppStdinFlagsAndAttributes
AppStdinShareMode
AppStdout
AppStdoutCreationDisposition
AppStdoutFlagsAndAttributes
AppStdoutShareMode
AppStopMethodConsole
AppStopMethodSkip
AppStopMethodThreads
AppStopMethodWindow
AppThrottle
DependOnGroup
DependOnService
Description
DisplayName
ImagePath
Name
ObjectName
Start
Type
```
