var FILE_CONST = {

    LOADER_IDLE: 0,
    LOADER_LOADING: 1,
    LOADER_PROCESSING: 2,
    LOADER_COMPLETE: 3,
    LOADER_DESTROYED: 4,

    FILE_PENDING: 5,      // file is in the load queue but not yet started
    FILE_LOADING: 6,      // file has been started to load by the loader (onLoad called)
    FILE_LOADED: 7,       // file has loaded successfully, awaiting processing
    FILE_FAILED: 8,       // file failed to load
    FILE_PROCESSING: 9,   // file is being processed (onProcess callback)
    FILE_COMPLETE: 10,     // file has finished processing
    FILE_DESTROYED: 11     // file has been destroyed

};

module.exports = FILE_CONST;
