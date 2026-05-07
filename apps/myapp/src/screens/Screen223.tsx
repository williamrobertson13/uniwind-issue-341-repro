import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy223 } from '../generated/copy/copy223';
import { layout223 } from '../generated/layouts/layout223';
import { palette223 } from '../generated/palettes/palette223';

const RuntimeView223 = withUniwind(View);

export function Screen223() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView223 styleClassName={layout223.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy223.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy223.detail} / {palette223.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
