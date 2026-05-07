import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1178 } from '../generated/copy/copy1178';
import { layout1178 } from '../generated/layouts/layout1178';
import { palette1178 } from '../generated/palettes/palette1178';

const RuntimeView1178 = withUniwind(View);

export function Screen1178() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1178 styleClassName={layout1178.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1178.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1178.detail} / {palette1178.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
