import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1362 } from '../generated/copy/copy1362';
import { layout1362 } from '../generated/layouts/layout1362';
import { palette1362 } from '../generated/palettes/palette1362';

const RuntimeView1362 = withUniwind(View);

export function Screen1362() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1362 styleClassName={layout1362.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1362.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1362.detail} / {palette1362.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
