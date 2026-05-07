import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1154 } from '../generated/copy/copy1154';
import { layout1154 } from '../generated/layouts/layout1154';
import { palette1154 } from '../generated/palettes/palette1154';

const RuntimeView1154 = withUniwind(View);

export function Screen1154() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1154 styleClassName={layout1154.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1154.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1154.detail} / {palette1154.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
