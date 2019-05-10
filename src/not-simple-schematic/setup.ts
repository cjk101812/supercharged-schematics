import {getWorkspace} from '@schematics/angular/utility/config';
import {parseName} from '@schematics/angular/utility/parse-name';
import {Tree} from '@angular-devkit/schematics';
// Trying to automagically add component to app.module file.
import {getProjectFromWorkspace} from 'schematics-utilities';
const utilities = require('../utilities/utilities');

export function setupOptions(host: Tree, options: any): Tree {
    const workspace = getWorkspace(host);
    if (!options.project) {
        options.project = Object.keys(workspace.projects)[0];
    }   
    if (options.path === undefined) {
        options.path = '/src/app';
    }
    const parsedPath = parseName(options.path, 'test-schematic');
    options.name = parsedPath.name;
    options.path = parsedPath.path + '/test-schematic';
    // Trying to automagically add component to app.module file.
    const currentProject = getProjectFromWorkspace(workspace);
    utilities.addModuleDeclarationToRootModule(host, 'CullenComponent', './test-schematic/cullen.component', currentProject);
    return host;
}