import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1391 } from '../generated/copy/copy1391';
import { layout1391 } from '../generated/layouts/layout1391';
import { palette1391 } from '../generated/palettes/palette1391';

const RuntimeView1391 = withUniwind(View);

export function Screen1391() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1391 styleClassName={layout1391.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1391.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1391.detail} / {palette1391.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
