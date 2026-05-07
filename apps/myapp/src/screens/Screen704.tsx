import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy704 } from '../generated/copy/copy704';
import { layout704 } from '../generated/layouts/layout704';
import { palette704 } from '../generated/palettes/palette704';

const RuntimeView704 = withUniwind(View);

export function Screen704() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView704 styleClassName={layout704.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy704.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy704.detail} / {palette704.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
