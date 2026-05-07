import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1174 } from '../generated/copy/copy1174';
import { layout1174 } from '../generated/layouts/layout1174';
import { palette1174 } from '../generated/palettes/palette1174';

const RuntimeView1174 = withUniwind(View);

export function Screen1174() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1174 styleClassName={layout1174.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1174.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1174.detail} / {palette1174.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
