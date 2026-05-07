import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy773 } from '../generated/copy/copy773';
import { layout773 } from '../generated/layouts/layout773';
import { palette773 } from '../generated/palettes/palette773';

const RuntimeView773 = withUniwind(View);

export function Screen773() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView773 styleClassName={layout773.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy773.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy773.detail} / {palette773.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
