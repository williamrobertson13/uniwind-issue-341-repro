import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1201 } from '../generated/copy/copy1201';
import { layout1201 } from '../generated/layouts/layout1201';
import { palette1201 } from '../generated/palettes/palette1201';

const RuntimeView1201 = withUniwind(View);

export function Screen1201() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1201 styleClassName={layout1201.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1201.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1201.detail} / {palette1201.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
