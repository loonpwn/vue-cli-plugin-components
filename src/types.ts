import { ProjectOptions } from "@vue/cli-service"
import { TemplateCompileResult } from "@vue/component-compiler-utils"
import * as Path from 'path'

export interface PluginOptions {
  path: string
  extensions?: Array<string>
  pattern?: string
  ignore?: string
}

export interface VueCliPluginComponentsOptions extends ProjectOptions {
  pluginOptions?: {
    components?: PluginOptions
  }
}

export interface TemplateCompileResultWithMeta extends TemplateCompileResult {
  tags: Set<string>
}

export interface ScanDir {
  path: string
  pattern?: string | string[]
  ignore?: string[]
  prefix?: string
  extensions?: Array<string>
}


export interface Component {
  pascalName: string
  kebabName: string
  import: string
  asyncImport?: string
  resourcePath?: string
  export: string
  filePath: string
  shortPath: string
  async?: boolean
  chunkName: string
  global?: boolean
  level?: number
}