import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy965 } from '../generated/copy/copy965';
import { layout965 } from '../generated/layouts/layout965';
import { palette965 } from '../generated/palettes/palette965';

const RuntimeView965 = withUniwind(View);

export function Screen965() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView965 styleClassName={layout965.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy965.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy965.detail} / {palette965.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
