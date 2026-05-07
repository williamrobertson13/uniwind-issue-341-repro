import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy435 } from '../generated/copy/copy435';
import { layout435 } from '../generated/layouts/layout435';
import { palette435 } from '../generated/palettes/palette435';

const RuntimeView435 = withUniwind(View);

export function Screen435() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView435 styleClassName={layout435.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy435.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy435.detail} / {palette435.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
