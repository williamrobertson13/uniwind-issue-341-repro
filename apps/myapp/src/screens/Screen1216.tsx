import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1216 } from '../generated/copy/copy1216';
import { layout1216 } from '../generated/layouts/layout1216';
import { palette1216 } from '../generated/palettes/palette1216';

const RuntimeView1216 = withUniwind(View);

export function Screen1216() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1216 styleClassName={layout1216.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1216.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1216.detail} / {palette1216.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
