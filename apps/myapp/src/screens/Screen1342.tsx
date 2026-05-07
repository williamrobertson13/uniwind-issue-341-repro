import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1342 } from '../generated/copy/copy1342';
import { layout1342 } from '../generated/layouts/layout1342';
import { palette1342 } from '../generated/palettes/palette1342';

const RuntimeView1342 = withUniwind(View);

export function Screen1342() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1342 styleClassName={layout1342.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1342.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1342.detail} / {palette1342.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
