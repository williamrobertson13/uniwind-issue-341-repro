import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1294 } from '../generated/copy/copy1294';
import { layout1294 } from '../generated/layouts/layout1294';
import { palette1294 } from '../generated/palettes/palette1294';

const RuntimeView1294 = withUniwind(View);

export function Screen1294() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1294 styleClassName={layout1294.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1294.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1294.detail} / {palette1294.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
