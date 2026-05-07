import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1386 } from '../generated/copy/copy1386';
import { layout1386 } from '../generated/layouts/layout1386';
import { palette1386 } from '../generated/palettes/palette1386';

const RuntimeView1386 = withUniwind(View);

export function Screen1386() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1386 styleClassName={layout1386.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1386.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1386.detail} / {palette1386.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
