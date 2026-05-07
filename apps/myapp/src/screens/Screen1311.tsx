import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1311 } from '../generated/copy/copy1311';
import { layout1311 } from '../generated/layouts/layout1311';
import { palette1311 } from '../generated/palettes/palette1311';

const RuntimeView1311 = withUniwind(View);

export function Screen1311() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1311 styleClassName={layout1311.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1311.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1311.detail} / {palette1311.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
