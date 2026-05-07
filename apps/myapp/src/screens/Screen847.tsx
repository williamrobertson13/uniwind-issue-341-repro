import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy847 } from '../generated/copy/copy847';
import { layout847 } from '../generated/layouts/layout847';
import { palette847 } from '../generated/palettes/palette847';

const RuntimeView847 = withUniwind(View);

export function Screen847() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView847 styleClassName={layout847.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy847.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy847.detail} / {palette847.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
