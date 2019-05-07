import {getWorkspace} from '@schematics/angular/utility/config';
import {parseName} from '@schematics/angular/utility/parse-name';
import {Tree} from '@angular-devkit/schematics';

export function setupOptions(host: Tree, options: any): Tree {
    const workspace = getWorkspace(host);
    if (!options.project) {
        options.project = Object.keys(workspace.projects)[0];
    }
    console.log('Project', options.project);
    
    if (options.path === undefined) {
        options.path = '/src/app';
    }
    console.log('Path', options.path);

    const parsedPath = parseName(options.path, 'test-schematic');
    options.name = parsedPath.name;
    options.path = parsedPath.path + '/test-schematic';
    return host;
}