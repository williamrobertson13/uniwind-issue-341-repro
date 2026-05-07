import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy615 } from '../generated/copy/copy615';
import { layout615 } from '../generated/layouts/layout615';
import { palette615 } from '../generated/palettes/palette615';

const RuntimeView615 = withUniwind(View);

export function Screen615() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView615 styleClassName={layout615.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy615.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy615.detail} / {palette615.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
