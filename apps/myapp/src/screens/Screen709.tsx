import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy709 } from '../generated/copy/copy709';
import { layout709 } from '../generated/layouts/layout709';
import { palette709 } from '../generated/palettes/palette709';

const RuntimeView709 = withUniwind(View);

export function Screen709() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView709 styleClassName={layout709.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy709.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy709.detail} / {palette709.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
