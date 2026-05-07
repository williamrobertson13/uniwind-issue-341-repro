import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1305 } from '../generated/copy/copy1305';
import { layout1305 } from '../generated/layouts/layout1305';
import { palette1305 } from '../generated/palettes/palette1305';

const RuntimeView1305 = withUniwind(View);

export function Screen1305() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1305 styleClassName={layout1305.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1305.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1305.detail} / {palette1305.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
