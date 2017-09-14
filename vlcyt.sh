#!/bin/bash

/usr/bin/vlc --one-instance $(echo $1 | cut -c 7-)
