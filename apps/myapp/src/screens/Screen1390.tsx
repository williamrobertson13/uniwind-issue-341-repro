import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1390 } from '../generated/copy/copy1390';
import { layout1390 } from '../generated/layouts/layout1390';
import { palette1390 } from '../generated/palettes/palette1390';

const RuntimeView1390 = withUniwind(View);

export function Screen1390() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1390 styleClassName={layout1390.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1390.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1390.detail} / {palette1390.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
