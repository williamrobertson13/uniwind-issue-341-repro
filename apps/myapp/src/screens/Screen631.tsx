import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy631 } from '../generated/copy/copy631';
import { layout631 } from '../generated/layouts/layout631';
import { palette631 } from '../generated/palettes/palette631';

const RuntimeView631 = withUniwind(View);

export function Screen631() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView631 styleClassName={layout631.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy631.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy631.detail} / {palette631.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
