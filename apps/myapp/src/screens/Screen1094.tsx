import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1094 } from '../generated/copy/copy1094';
import { layout1094 } from '../generated/layouts/layout1094';
import { palette1094 } from '../generated/palettes/palette1094';

const RuntimeView1094 = withUniwind(View);

export function Screen1094() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1094 styleClassName={layout1094.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1094.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1094.detail} / {palette1094.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
