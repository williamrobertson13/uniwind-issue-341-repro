import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1166 } from '../generated/copy/copy1166';
import { layout1166 } from '../generated/layouts/layout1166';
import { palette1166 } from '../generated/palettes/palette1166';

const RuntimeView1166 = withUniwind(View);

export function Screen1166() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1166 styleClassName={layout1166.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1166.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1166.detail} / {palette1166.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
