import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy774 } from '../generated/copy/copy774';
import { layout774 } from '../generated/layouts/layout774';
import { palette774 } from '../generated/palettes/palette774';

const RuntimeView774 = withUniwind(View);

export function Screen774() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView774 styleClassName={layout774.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy774.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy774.detail} / {palette774.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
