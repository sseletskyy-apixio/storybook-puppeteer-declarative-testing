#! /usr/bin/env node

//const [, , ...args] = process.argv
//console.log(`BEGIN: generate story index: args = ${args}`)
const shell = require('shelljs')
const path = require('path')
const { getConfig } = require('../lib/config')

const config = getConfig()
const nodeExec = shell.which('babel-node')
const pathToFile = path.resolve(config.projectRoot, config.pathToTestIndex, config.testIndexName)
const command = `${nodeExec} ${pathToFile}`
shell.echo(`Command: ${command}`)
shell.cd(config.projectRoot)
shell.exec(command)
shell.exit()
