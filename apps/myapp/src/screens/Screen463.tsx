import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy463 } from '../generated/copy/copy463';
import { layout463 } from '../generated/layouts/layout463';
import { palette463 } from '../generated/palettes/palette463';

const RuntimeView463 = withUniwind(View);

export function Screen463() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView463 styleClassName={layout463.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy463.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy463.detail} / {palette463.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
