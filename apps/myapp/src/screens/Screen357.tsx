import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy357 } from '../generated/copy/copy357';
import { layout357 } from '../generated/layouts/layout357';
import { palette357 } from '../generated/palettes/palette357';

const RuntimeView357 = withUniwind(View);

export function Screen357() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView357 styleClassName={layout357.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy357.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy357.detail} / {palette357.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
