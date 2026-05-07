import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy319 } from '../generated/copy/copy319';
import { layout319 } from '../generated/layouts/layout319';
import { palette319 } from '../generated/palettes/palette319';

const RuntimeView319 = withUniwind(View);

export function Screen319() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView319 styleClassName={layout319.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy319.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy319.detail} / {palette319.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
