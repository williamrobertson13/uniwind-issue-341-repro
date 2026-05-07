import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1296 } from '../generated/copy/copy1296';
import { layout1296 } from '../generated/layouts/layout1296';
import { palette1296 } from '../generated/palettes/palette1296';

const RuntimeView1296 = withUniwind(View);

export function Screen1296() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1296 styleClassName={layout1296.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1296.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1296.detail} / {palette1296.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
