import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy279 } from '../generated/copy/copy279';
import { layout279 } from '../generated/layouts/layout279';
import { palette279 } from '../generated/palettes/palette279';

const RuntimeView279 = withUniwind(View);

export function Screen279() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView279 styleClassName={layout279.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy279.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy279.detail} / {palette279.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
