#!/bin/bash
scp -i ./dana.pem -r ../../dist .compute-1.amazonaws.com:~/
