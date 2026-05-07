import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy711 } from '../generated/copy/copy711';
import { layout711 } from '../generated/layouts/layout711';
import { palette711 } from '../generated/palettes/palette711';

const RuntimeView711 = withUniwind(View);

export function Screen711() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView711 styleClassName={layout711.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy711.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy711.detail} / {palette711.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
