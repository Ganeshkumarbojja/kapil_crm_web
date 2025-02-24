/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
export interface MenuItem {
    id?: number;
    label?: any;
    icon?: string;
    link?: string;
    subItems?: any;
    isTitle?: boolean;
    badge?: any;
    parentId?: number;
    isLayout?: boolean;
    collapseid?: string;
    isCollapsed?: any;
}